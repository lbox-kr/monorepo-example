import { test } from "shared/src/const";
import { Button } from "storybook/src/stories/Button";

export default function Home() {
  return (
    <div>
      {test}
      <Button primary label="테스트" />
    </div>
  )
}
