import FFmpeg from '@ffmpeg/ffmpeg';

export const compressFile = async (file: Buffer) => {
    const { createFFmpeg, fetchFile } = FFmpeg;
    const ffmpeg = createFFmpeg({ log: true });
    await ffmpeg.load();
    ffmpeg.FS('writeFile', "input.mp4", await fetchFile(file));
    await ffmpeg.run('-i', "input.mp4", '-vcodec', 'libx264', '-crf', '24', 'output.mp4');
    const data = ffmpeg.FS('readFile', 'output.mp4');
    return Buffer.from(data);
}