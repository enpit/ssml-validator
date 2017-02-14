# ssml-validator
Automatically replaces invalid characters from a given SSML string.
Useful when creating a bot for Amazon's Alexa, which will refuse to speak when certain characters are contained in the string that you want her to read.

## API

### correct(ssmlString, [locale])

Replaces invalid characters from the given `ssmlString` and returns the new string.
If `locale` is set, language-specific replacements are used for some characters; defaults to English, currently only supports `de-DE`.
