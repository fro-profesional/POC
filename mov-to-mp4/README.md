# MOV to MP4 Converter

A simple TypeScript script to convert .mov video files to .mp4 format using the `fluent-ffmpeg` library.

## Prerequisites

1. Install [Deno](https://deno.land/)
2. Install [FFmpeg](https://www.ffmpeg.org/download.html) and ensure it's available in your system's PATH.

## Installation

1. Clone this repository or download the `convert-video.ts` script.

```
git clone https://github.com/fro-profesion/POC/mov-to-mp4.git
```

2. Navigate to dir of the script.

```
cd mov-to-mp4
```

## Usage

1. Update the `inputPath` and `outputPath` variables in the `convert-video.ts` script with the appropriate paths to your input .mov file and desired output .mp4 file.

```typescript
const inputPath = 'path/to/your/input.mov';
const outputPath = 'path/to/your/output.mp4';
```

2. Run

```
deno run -A convert-video.ts
```

The script will convert the specified .mov video to .mp4 format using the H.264 video codec and AAC audio codec. Progress will be displayed in the console.
