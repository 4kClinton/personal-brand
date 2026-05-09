import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  const imgData = readFileSync(join(process.cwd(), 'public/assets/web-icon.png'));
  const dataUrl = `data:image/png;base64,${imgData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <img src={dataUrl} width={26} height={26} style={{ objectFit: 'contain' }} />
      </div>
    ),
    { ...size }
  );
}
