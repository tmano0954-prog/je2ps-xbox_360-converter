'use client';

import { useState } from 'react';
import { initConverter, convertWorld } from '@/utils/converterCore';

export default function Home() {
  const [status, setStatus] = useState('Ready to convert');
  const [loading, setLoading] = useState(false);

  const handleConversionTest = async () => {
    setLoading(true);
    setStatus('Initializing WASM core...');
    
    try {
      await initConverter();
      setStatus('Converting world buffer...');
      await convertWorld();
      setStatus('Conversion complete successfully!');
    } catch (err) {
      console.error(err);
      setStatus('Conversion failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h1>JE2BE World Converter</h1>
      <p>Convert your Minecraft worlds directly in your browser using WebAssembly and C++.</p>
      
      <div className="dropzone">
        <p>Drop your world folder / save here</p>
        <button 
          onClick={handleConversionTest} 
          disabled={loading}
          className="convert-btn"
        >
          {loading ? 'Processing...' : 'Run Test Conversion'}
        </button>
      </div>

      <p className="status"><strong>Status:</strong> {status}</p>
    </main>
  );
  }
    
