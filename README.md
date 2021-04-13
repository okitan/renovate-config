# renovate-config

Shareable Config Presets of renovate

## Usage

extend like this in your renovate config. See [Preset Hosting](https://docs.renovatebot.com/config-presets/#preset-hosting) in details.

```renovate.json:json
{ "extends": ["local>okitan/renovate-config"] }
```

## Notice

`default.json` is created and overwritten from `renovate.json5`. You should edit `renovate.json5` only.
