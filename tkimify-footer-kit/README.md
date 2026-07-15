# tkimify Footer Kit

This folder packages the footer icon row currently used on the Starting Five site.

## Files

- `footer.html` - HTML snippet for the footer icon row.
- `footer.css` - CSS copied from the Starting Five footer behavior and made portable.
- `tkimifylight.png` - transparent, tightly cropped tkimify logo asset used as a CSS mask.

## How to Use

1. Copy `tkimifylight.png` into the other site's public/static asset folder.
2. Paste the HTML from `footer.html` where the footer should appear.
3. Paste or import the CSS from `footer.css`.
4. If the image is not served from the same folder as the page/CSS, update both mask URLs:

```css
-webkit-mask:url("tkimifylight.png") center / 14px 14px no-repeat;
mask:url("tkimifylight.png") center / 14px 14px no-repeat;
```

For example, if the asset is in `/assets/tkimifylight.png`, use:

```css
-webkit-mask:url("/assets/tkimifylight.png") center / 14px 14px no-repeat;
mask:url("/assets/tkimifylight.png") center / 14px 14px no-repeat;
```

## Notes

- The tkimify icon is rendered with `currentColor`, so it matches the Instagram icon gray and hover color.
- The visible tkimify mark is intentionally sized at `14px` because the logo shape reads visually larger than its raw canvas size.
- The source asset has a transparent background and is cropped tightly to the logo shape.
