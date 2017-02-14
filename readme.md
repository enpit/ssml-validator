# ssml-validator
Automatically replaces invalid characters from a given SSML string

## API

### correct(ssmlString, [locale])

Replaces invalid characters from the given `ssmlString` and returns the new string.
If `locale` is set, language-specific replacements are used for some characters; defaults to English, currently only supports `de-DE`.
