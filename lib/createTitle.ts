export default function createTitle(title?: string): string {
  const elements = ['株式会社デベルハック'];
  if (title) {
    elements.unshift(title);
  }
  return elements.join(' | ');
}
