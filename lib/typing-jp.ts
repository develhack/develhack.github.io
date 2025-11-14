interface Token {
  composing: boolean;
  characters: string[];
}

interface Line {
  tokens: Token[];
  broken: boolean;
}

export interface TypingEvent {
  state: "begin" | "progress" | "end";
  lines: Line[];
}

export interface TypingEventHandler {
  (event: TypingEvent): void;
}

interface TypeFunction {
  (input: string): TypingInstance;
  (
    input: string[],
    composing: string[],
    conversions?: string[]
  ): TypingInstance;
  (input: string[], composing: string[], enter?: boolean): TypingInstance;
}

interface TypingInstance {
  type: TypeFunction;
  newLine: () => TypingInstance;
  wait: (ms: number) => TypingInstance;
  back: (count: number) => TypingInstance;
  end: () => Promise<void>;
}

type Operation = () => Promise<void>;

export default class Typing implements TypingInstance {
  private handler: TypingEventHandler;
  private interval: number;
  private operationas: Operation[];
  private event: TypingEvent;
  private currentLine: Line;

  constructor(handler: TypingEventHandler, interval: number) {
    this.handler = handler;
    this.interval = interval;
    this.operationas = [];

    this.event = {
      state: "begin",
      lines: [],
    };
    this.currentLine = {
      broken: false,
      tokens: [],
    };
    this.event.lines.push(this.currentLine);

    this.emit();
    this.event.state = "progress";
  }

  type(
    input: string | string[],
    composing?: string[],
    conversionsOrEnter: string[] | boolean = true
  ) {
    const token: Token = { composing: true, characters: [] };
    if (!Array.isArray(input)) {
      input = [...input];
      token.composing = false;
    }

    this.operate(() => {
      this.currentLine.tokens.push(token);
    });
    for (let i = 0; i < input.length; ++i) {
      if (composing?.[i]) {
        this.operate(() => {
          token.characters.push(composing[i]);
          this.emit();
        });
        this.operate(() => {
          token.characters[token.characters.length - 1] = input[i];
          this.emit();
        });
      } else {
        this.operate(() => {
          token.characters.push(input[i]);
          this.emit();
        });
      }
    }

    if (Array.isArray(conversionsOrEnter)) {
      const conversions = conversionsOrEnter;
      for (const conversion of conversions) {
        this.operate(() => {
          token.characters = [...conversion];
          this.emit();
        });
      }
      this.operate(() => {
        token.composing = false;
        this.emit();
      });
    } else {
      if (conversionsOrEnter) {
        this.operate(() => {
          token.composing = false;
          this.emit();
        });
      }
    }
    return this;
  }

  newLine() {
    this.operate(() => {
      this.currentLine.broken = true;
      this.currentLine = {
        broken: false,
        tokens: [],
      };
      this.event.lines.push(this.currentLine);
      this.emit();
    });
    return this;
  }

  wait(ms: number) {
    this.operationas.push(
      () => new Promise((resolve) => setTimeout(resolve, ms))
    );
    return this;
  }

  back(count: number) {
    for (let i = 0; i < count; ++i) {
      this.operate(() => {
        const token = this.getLastToken();
        if (!token) {
          console.warn("can not get last token");
          return;
        }
        token.characters.pop();
        this.emit();
      });
    }
    return this;
  }

  async end() {
    for (const operation of this.operationas) {
      await operation();
    }
    this.event.state = "end";
    this.emit();
  }

  private emit() {
    this.handler(structuredClone(this.event));
  }

  private operate(operation: () => void, delay = this.interval) {
    this.operationas.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            operation();
            resolve();
          }, delay);
        })
    );
  }

  private getLastToken(): Token | undefined {
    const token = this.currentLine.tokens.at(-1);
    if (!token) {
      return;
    }
    if (!token.characters.length) {
      this.currentLine.tokens.pop();
      return this.getLastToken();
    }
    return token;
  }
}
