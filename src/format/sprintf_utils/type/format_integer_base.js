import alignAndPad from '../align_and_pad';
import toString from '../../../utils/string/to_string';
import { Type } from '../const';

/**
 * Formats an integer type according to specifiers.
 *
 * @ignore
 * @param  {string} replacement          The string to be formatted.
 * @param  {string} [signSpecifier]      The sign specifier to force a sign to be used on a number.
 * @param  {string} paddingCharacter     The padding character.
 * @param  {string} [alignmentSpecifier] The alignment specifier that says if the result should be left-justified or right-justified.
 * @param  {number} [width]              The width how many characters this conversion should result in.
 * @param  {number} [precision]          The precision.
 * @param  {string} typeSpecifier        The type specifier says what type the argument data should be treated as.
 * @return {string}                      Returns the formatted string.
 */

export default function(replacement, signSpecifier, paddingCharacter, alignmentSpecifier, width, precision, typeSpecifier) {
  var integer = parseInt(replacement);
  if (isNaN(integer)) {
    integer = 0;
  }
  integer = integer >>> 0;
  switch (typeSpecifier) {
    case Type.INTEGER_ASCII_CHARACTER:
      integer = String.fromCharCode(integer);
      break;
    case Type.INTEGER_BINARY:
      integer = integer.toString(2);
      break;
    case Type.INTEGER_OCTAL:
      integer = integer.toString(8);
      break;
    case Type.INTEGER_HEXADECIMAL:
      integer = integer.toString(16);
      break;
    case Type.INTEGER_HEXADECIMAL_UPPERCASE:
      integer = integer.toString(16).toUpperCase();
      break;
  }
  return alignAndPad(toString(integer), paddingCharacter, alignmentSpecifier, width);
}