import {
  Button,
  Checkbox,
  Flex,
  Input,
  Progress,
  Radio,
  Select,
  Space,
} from "antd";

export function Poll({
  mode = "builder",
  type = "multiple",
  name = "",
  options = [],
  onNameChange,
  onTypeChange,
  onOptionsUpdate,
  onAddOptions,
}) {
  return (
    <Flex vertical gap={32}>
      <Flex gap={32} align="center">
        {(mode === "runtime" || mode === "report") && (
          <p style={{ flex: 1 }}>{name}</p>
        )}
        {mode === "builder" && (
          <Input
            style={{ flex: 1 }}
            showCount
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            maxLength={100}
          />
        )}
        {mode === "builder" && (
          <Select
            onChange={(e) => onTypeChange(e)}
            defaultValue="single"
            style={{ minWidth: "200px" }}
            options={[
              {
                value: "single",
                label: "Single",
              },
              {
                value: "multiple",
                label: "Multiple",
              },
            ]}
          />
        )}
      </Flex>
      {mode === "runtime" &&
        (type === "single" ? (
          <Radio.Group
          // onChange={onChange}
          // value={value}
          >
            <Space direction="vertical">
              {options.map((item) => (
                <Radio key={item.id} value={item.id}>
                  {item.name}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        ) : (
          <Checkbox.Group
            style={{ width: "100%" }}
            // onChange={onChange}
          >
            <Space direction="vertical">
              {options.map((item) => (
                <Checkbox key={item.id} value={item.id}>
                  {item.name}
                </Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        ))}
      {mode === "builder" && (
        <>
          {options.map((item) => (
            <Input
              style={{ width: "75%" }}
              showCount
              value={item.name}
              onChange={(e) => onOptionsUpdate(item, e.target.value)}
              maxLength={100}
              // onChange={onChange}
            />
          ))}
          <Flex>
            <Button onClick={onAddOptions}>Add Option</Button>
          </Flex>
        </>
      )}
      {mode === "report" &&
        options.map((item) => (
          <>
            <span>{item.name}</span>
            <Progress percent={item.count} />
          </>
        ))}
    </Flex>
  );
}
