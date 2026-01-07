const { Score } = _InfoPage;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={12}>
      <Flex gap={24}>
        <Score value={0} />
        <Score value={1} />
        <Score value={2} />
        <Score value={3} />
        <Score value={4} />
        <Score value={5} />
      </Flex>
      <Flex gap={24}>
        <Score value={0} total={3} />
        <Score value={1} total={3} />
        <Score value={2} total={3} />
        <Score value={3} total={3} />
      </Flex>
      <Flex gap={24}>
        <Score value={0} gap={0} />
        <Score value={1} gap={0} />
        <Score value={2} gap={0} />
        <Score value={3} gap={0} />
        <Score value={4} gap={0} />
        <Score value={5} gap={0} />
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);
