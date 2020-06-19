# Collapse / Accordion?

## Memo

- Dynamic children height (like form error) may break fixed height solution.
- Doest `height: auto` work?

  - Nope, it won't have height animation

- Delete item may have no effect if we remove item before applying transition
  - Give up, makes no animaiton for updating content height
