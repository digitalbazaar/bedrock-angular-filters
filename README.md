# bedrock-angular-filters

A [bedrock][] [bower][] module that implements various [AngularJS][] filters.

## Quick Examples

```html
<!-- show a readable byte count -->
<div>Download size: {{downloadSize | bytes}}</div>

<!-- mask a credit card number -->
<div>Card number: {{cardNumber | mask}}</div>
```

## Setup

```
bower install bedrock-angular-filters
```

Installation of the module followed by a restart of your [bedrock][] server
is sufficient to make the module and filters available to your application.

To manually add **bedrock-angular-filters** as a dependency:

```js
angular.module('myapp', ['bedrock.filters']);
```

## Filters

### bytes

Humanize a number into a readable quantity of bytes.

```html
{{NUMBER | bytes[:PRECISION]}}
```

Options:
- **PRECISION**: Precision of the output (optional, default `1`).

```
{{1234 | bytes}} => '1.2 KiB'
{{123456 | bytes}} => '120.6 KiB'
{{1234567890 | bytes}} => '1.1 GiB'
{{123456789012345 | bytes}} => '112.3 TiB'
{{123456789012345678 | bytes}} => '109.7 PiB'
{{123456789012345678 | bytes:3}} => '109.652 PiB'
```

### ceil

Perform a `Math.ceil` operation on a string number.

```html
{{STRING_NUMBER | ceil[:DIGITS]}}
```

Options:
- **DIGITS**: Number of digits to display (optional, default `2`).

```
{{'1.123' | ceil}} => '1.13'
{{'0.991' | ceil}} => '1.00'
{{'0.991' | ceil:4}} => '0.9910'
```

### ellipsis

Limit the length of a string and show ellipsis if needed.

```html
{{STRING | ellipsis[:LENGTH]}}
```

Options:
- **LENGTH**: The maximum length of the string including ellipsis.  Ignored if
  less than 3.

```
{{'abcdefg' | ellipsis:10}} => 'abcdefg'
{{'abcdefg' | ellipsis:6}} => 'abc...'
{{'abcdefg' | ellipsis:1}} => '...'
```

### embedded-string

Replace carriage return (0x0d) with `\r` (0x5c 0x72) and newline (0x0a) with
`\n` (0x5c 0x63).

```html
{{STRING | embeddedString}}
```

```
{{multi_line_string | embeddedString}} => 'abc\r\ndef'
```

### encodeuricomponent

Process a string with `encodeURIComponent`.

```html
{{STRING | encodeuricomponent}}
```

```
{{'http://foo.bar?baz=fuzz' | encodeuricomponent}} => 'http%3A%2F%2Ffoo.bar%3Fbaz%3Dfuzz'
```

### floor

Perform a `Math.floor` operation on a string number.

```html
{{STRING_NUMBER | floor[:DIGITS]}}
```

Options:
- **DIGITS**: Number of digits to display (optional, default `2`).

```
{{'1.123' | floor}} => '1.12'
{{'0.991' | floor:3}} => '0.991'
{{'0.991' | floor:4}} => '0.9910'
```

### isEmpty

Check if a string, array, or object is empty.

```html
{{VALUE | isEmpty}}
```

```
{{'' | isEmpty}} => true
{{'1234' | isEmpty}} => false
{{[] | isEmpty}} => true
{{[1234] | isEmpty}} => false
{{{} | isEmpty}} => true
{{{'value': 1234} | isEmpty}} => false
```

### mask

Show only the 4 final characters of a string and mask the rest.

```html
{{STRING | mask[:LENGTH]}}
```

Options:
- **LENGTH**: The length of the masked string (optional, default `5`).

```
{{'12345' | mask}} => '*2345'
{{'12345' | mask:4}} => '2345'
{{'12345' | mask:8}} => '****2345'
```

### now

Filter the current date and time through the `date` filter.

```html
{{'' | now:FORMAT}}
```

Options:
- **FORMAT**: The maximum length of the string including ellipsis.  Ignored if
  less than 3.

```
{{'' | now:'d MMM yyyy'}} => '1 Jan 2001'
```

### prefill

Fill the beginning of a string with a character.

```html
{{STRING | prefill[:LENGTH][:CH]}}
```

Options:
- **LENGTH**: The length of the output string (optional, default 2).
- **CH**: The character used to fill the string (optional, default `0`).

```
{{'1' | prefill}} => '01'
{{'1' | prefill:2:'a'}} => 'a1'
{{'1' | prefill:3}} => '001'
```

[AngularJS]: https://angularjs.org/
[bedrock]: https://github.com/digitalbazaar/bedrock
[bower]: http://bower.io/
