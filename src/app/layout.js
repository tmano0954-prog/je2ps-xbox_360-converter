import './globals.css';

export const metadata = {
  title: 'Java to Bedrock & Console World Converter',
  description: 'Convert Minecraft Java Edition worlds to Bedrock and console formats in your browser.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
    }
  
