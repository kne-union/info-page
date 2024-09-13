const { default: Content } = _Content;
const BaseExample = () => {
  return (
    <Content
      col={2}
      labelAlign="auto"
      list={[
        { label: '标题', content: '内容' },
        { label: '标题标题', content: '内容内容' },
        { label: '标题标', content: '内容内容内容内容内容内容内容内容内容内容' },
        {
          label: '标题标题标题',
          content:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        }
      ]}
    />
  );
};

render(<BaseExample />);
