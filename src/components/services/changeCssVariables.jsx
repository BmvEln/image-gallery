export const changeCssVariables = (theme) => {
  const root = document.querySelector(':root');

  const cssVariables = ['header', 'background', 'singleImageButton'];

  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
