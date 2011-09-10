# Animated Border

Animated borders for any block level element. This plugin creates an animated border with configurable thickness and color.

It does this by adding 4 absolutely positioned divs around the element. The 4 highlight divs use an animated gif with white blocks and transparent areas. This allows the background of the div to be visible and be treated as the color of the animated border.

# Known Issues

**Background patterns** are not handled with the default stripe.gif file. The plugin uses the the background color of the divs to make the border color. This means that the non-transparent area of the checkerboard has to match the background color of the page for the illusion to work. If you had a page with surrounding elements under the border, or you had a non white background, you should create a new animated gif with blocks that are transparent and the desired border color.