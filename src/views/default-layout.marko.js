function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      layout_placeholder = __loadTag(require("marko/taglibs/layout/placeholder-tag"));

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>");

    layout_placeholder({
        name: "title",
        content: data.layoutContent
      }, out);

    out.w("</title></head><body>");

    if (data.showHeader !== false) {
      out.w("<h1>");

      layout_placeholder({
          name: "title",
          content: data.layoutContent
        }, out);

      out.w("</h1>");
    }

    layout_placeholder({
        name: "body",
        content: data.layoutContent
      }, out);

    out.w("<div>");

    layout_placeholder({
        name: "footer",
        content: data.layoutContent,
        renderBody: function renderBody(out) {
          out.w("Default footer");
        }
      }, out);

    out.w("</div></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
