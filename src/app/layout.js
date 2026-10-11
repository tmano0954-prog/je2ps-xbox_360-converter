import './globals.css';

export const metadata = {
  title: 'Java & Bedrock to Xbox 360 / PS3 World Converter',
  description: 'Convert Minecraft Java and Bedrock worlds to legacy console formats (Xbox 360 & PS3) right in your browser.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
