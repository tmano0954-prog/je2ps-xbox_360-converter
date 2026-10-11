'use client';

import { useState } from 'react';
import { initConverter, convertWorld } from '@/utils/converterCore';

export default function Home() {
  const [status, setStatus] = useState('Ready to convert');
  const [loading, setLoading] = useState(false);
  const [targetTU, setTargetTU] = useState('TU75'); // Default to final Xbox 360 update

  // Generate Title Updates TU1 through TU75
  const titleUpdates = Array.from({ length: 75 }, (_, i) => `TU${i + 1}`);

  const handleConversionTest = async () => {
    setLoading(true);
    setStatus(`Initializing WASM core for target version ${targetTU}...`);
    
    try {
      await initConverter();
      setStatus(`Converting world format for Xbox 360 (${targetTU})...`);
      await convertWorld();
      setStatus(`Conversion complete successfully for ${targetTU}!`);
    } catch (err) {
      console.error(err);
      setStatus('Conversion failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h1>Java & Bedrock to Console Converter</h1>
      <p>Convert your Java or Bedrock world saves into Xbox 360 and PS3 formats.</p>
      
      <div className="dropzone">
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="tu-select" style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
            Target Xbox 360 Title Update:
          </label>
          <select 
            id="tu-select"
            value={targetTU} 
            onChange={(e) => setTargetTU(e.target.value)}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', background: '#333', color: '#fff', border: '1px solid #555' }}
          >
            {titleUpdates.map((tu) => (
              <option key={tu} value={tu}>
                {tu} {tu === 'TU1' ? '(Release / 2012)' : tu === 'TU75' ? '(Final Update)' : ''}
              </option>
            ))}
          </select>
        </div>

        <p>Drop your world folder / save / STFS container here</p>
        <button 
          onClick={handleConversionTest} 
          disabled={loading}
          className="convert-btn"
        >
          {loading ? 'Processing...' : `Convert World to ${targetTU}`}
        </button>
      </div>

      <p className="status"><strong>Status:</strong> {status}</p>
    </main>
  );
    }
    
