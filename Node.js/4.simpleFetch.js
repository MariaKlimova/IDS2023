//Пример на fetch
import { TextDecoderStream } from 'node:stream/web';

async function fetchStream() {
    const response = await fetch('https://ya.ru')
    const stream = response.body;
    const textStream = stream.pipeThrough(new TextDecoderStream());
    for await (const chunk of textStream){
        console.log(chunk);
    }
}

await fetchStream();