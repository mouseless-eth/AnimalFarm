const shuffle = () => {
  const assets = [
    { image: '/assets/flashbots.png' },
    { image: '/assets/foundry.png' },
    { image: '/assets/linux.png' },
    { image: '/assets/react.png' },
    { image: '/assets/rust.png' },
    { image: '/assets/solidity.png' },
    { image: '/assets/typescript.png' },
    { image: '/assets/vim.png' },
  ];

  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
}

export default shuffle;
