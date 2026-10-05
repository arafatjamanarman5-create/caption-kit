# caption-kit

A lightweight CLI tool that generates captions, hashtags, and
posting-time suggestions for Facebook, YouTube Shorts, and Instagram.
No API key needed. Supports English and Bangla.

## Usage

    node src/index.js --topic football --platform shorts --lang bn --count 3

Options:
- `--topic`: your topic (default: content)
- `--platform`: `shorts`, `instagram`, `facebook`
- `--lang`: `en` or `bn` (Bangla)
- `--count`: number of captions, 1-5

## Example output

    Caption 1: football like you've never seen 👀
    Caption 2: Wait for it... football edition
    Hashtags: #football #shorts #viral
    Suggested time: 6-9 PM (test it on your own audience)

## Roadmap

- More caption templates per platform
- More languages
- Optional AI-powered captions

## License

MIT
