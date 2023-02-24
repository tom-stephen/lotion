
//  emoves all HTML tags from a string
export function removeHTMLtags (str) {
  return str.replace(/<[^>]*>?/gm, '')
};

