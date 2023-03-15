import ffmpeg from 'npm:fluent-ffmpeg';

function convertMovToMp4(inputPath: string, outputPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions('-c:v', 'libx264', '-c:a', 'aac', '-movflags', 'faststart')
        .output(outputPath)
        .on('start', () => {
          console.log('Conversion started');
        })
        .on('progress', (progress: { percent: number; }) => {
          console.log(`Processing: ${progress.percent.toFixed(1)}% done`);
        })
        .on('end', () => {
          console.log('Conversion finished');
          resolve();
        })
        .on('error', (err: any) => {
          console.error('Error during conversion', err);
          reject(err);
        })
        .run();
    });
  }
  

const inputPath = '/Users/franciscoramos/Downloads/chat-gpt.mov';
const outputPath = '/Users/franciscoramos/Downloads/chat-gpt.mp4';

convertMovToMp4(inputPath, outputPath)
  .then(() => {
    console.log('Video conversion completed successfully');
  })
  .catch((error) => {
    console.error('Video conversion failed', error);
  });
