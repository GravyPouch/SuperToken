# LLM.js

Integrate all LLM providers with a single Typescript SDK using OpenAIs format.

## Features

* Define prompts in OpenAIs format and have them translated automatially for each provider.
* Support for tools, JSON output, image inputs, streaming, and more.
* Support for 9 popular LLM providers: A21, Anthropic, Bedrock, Cohere, Gemini, Groq, Mistral, OpenAI, and Perplexity with more coming soon.
* Completely free with no proxy server.

## Setup

### Installation

{% tabs %}
{% tab title="npm" %}
```bash
npm install llmjs
```
{% endtab %}

{% tab title="pnpm" %}
```bash
pnpm install llmjs
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add llmjs
```
{% endtab %}

{% tab title="bun" %}
```bash
bun add llmjs
```
{% endtab %}
{% endtabs %}

### Environment Variables

<pre class="language-env"><code class="lang-env"><strong>OPENAI_API_KEY=&#x3C;your openai api key>
</strong>GEMINI_API_KEY=&#x3C;your gemini api key>
ANTHROPIC_API_KEY=&#x3C;your api>
</code></pre>

### Usage

{% tabs %}
{% tab title="OpenAI" %}
{% code fullWidth="false" %}
```ts
import { LLM, ChatCompletionMessageParam } from 'llmjs'

const llm = new LLM()
const result: ChatCompletionMessageParam[] = await llm.chat.completions.create({
  provider: 'openai',
  model: 'gpt-4o',
  messages: [{
    role: 'user',
    content: `How are you?`,
  }],
})
```
{% endcode %}

{% code title=".env" %}
```bash
OPENAI_API_KEY=<openai api key>
```
{% endcode %}
{% endtab %}

{% tab title="Anthropic" %}
```typescript
import { LLM, ChatCompletionMessageParam } from 'llmjs'

const llm = new LLM({ apiKey: '<anthropic api key>' })
const result: ChatCompletionMessageParam[] = await llm.chat.completions.create({
  provider: 'anthropic',
  model: 'claude-2.0',
  messages: [{
    role: 'user',
    content: `How are you?`,
  }],
})
```

{% code title=".env" %}
```bash
ANTHROPIC_API_KEY=<openai api key>
```
{% endcode %}
{% endtab %}

{% tab title="Gemini" %}
```typescript
import { LLM, ChatCompletionMessageParam } from 'llmjs'

const llm = new LLM({ apiKey: '<gemini api key>' })
const result: ChatCompletionMessageParam[] = await llm.chat.completions.create({
  provider: 'gemini',
  model: 'gemini-1.5-pro',
  messages: [{
    role: 'user',
    content: `How are you?`,
  }],
})
```

{% code title=".env" %}
```bash
ANTHROPIC_API_KEY=<openai api key>
```
{% endcode %}
{% endtab %}

{% tab title="AI21" %}
```typescript
import { LLM, ChatCompletionMessageParam } from 'llmjs'

const llm = new LLM({ apiKey: '<ai21 api key>' })
const result: ChatCompletionMessageParam[] = await llm.chat.completions.create({
  provider: 'ai21',
  model: 'jamba-instruct',
  messages: [{
    role: 'user',
    content: `How are you?`,
  }],
})
```
{% endtab %}

{% tab title="Bedrock" %}
```typescript
import { LLM, ChatCompletionMessageParam } from 'llmjs'

const llm = new LLM({ apiKey: '<ai21 api key>' })
const result: ChatCompletionMessageParam[] = await llm.chat.completions.create({
  provider: 'bedrock',
  model: 'amazon.titan-text-express-v1',
  messages: [{
    role: 'user',
    content: `How are you?`,
  }],
})
```
{% endtab %}

{% tab title="Cohere" %}
```typescript
import { LLM, ChatCompletionMessageParam } from 'llmjs'

const llm = new LLM({ apiKey: '<ai21 api key>' })
const result: ChatCompletionMessageParam[] = await llm.chat.completions.create({
  provider: 'cohere',
  model: 'command-r',
  messages: [{
    role: 'user',
    content: `How are you?`,
  }],
})
```
{% endtab %}

{% tab title="Groq" %}

{% endtab %}
{% endtabs %}

## Streaming

LLM.js supports streaming for all providers that support it.

```ts
import { LLM } from 'llmjs'

const llm = new LLM()
const result = await llm.chat.completions.create({
  stream: true,
  provider: 'gemini',
  model: 'gemini-1.5-pro',
  messages: [
    {
      role: 'user',
      content: `How are you?`,
    },
  ],
})

for await (const part of result) {
  process.stdout.write(part.choices[0]?.delta?.content || '')
}
```

## Tools

LLM.js supports tools for all providers and models that support it.

```ts
import { LLM, ChatCompletionTool } from 'llmjs'

const llm = new LLM()

const tools: ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'getCurrentWeather',
      description: 'Get the current weather in a given location',
      parameters: {
        type: 'object',
        properties: {
          location: {
            type: 'string',
            description: 'The city and state, e.g. San Francisco, CA',
          },
          unit: { type: 'string', enum: ['celsius', 'fahrenheit'] },
        },
        required: ['location', 'unit'],
      },
    },
  },
]

const result = await llm.chat.completions.create({
  provider: 'gemini',
  model: 'gemini-1.5-pro',
  messages: [
    {
      role: 'user',
      content: `What's the weather like in San Francisco?`,
    },
  ],
  tools,
  tool_choice: 'auto',
})
```

## Providers

Not every feature is supported by every provider and model. This table provides a general overview of what features are supported by each provider. For details on which features are supported by individual models from different providers see the [provider documentation](todo\(md\)/).

| provider   | Completion           | Streaming            | Tools                | JSON Output          | Image Input          |
| ---------- | -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| openai     | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: |
| anthropic  | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: |
| bedrock    | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: |
| mistral    | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: |                      |
| cohere     | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: |                      |                      |
| AI21       | :white\_check\_mark: | :white\_check\_mark: |                      |                      |                      |
| Gemini     | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: | :white\_check\_mark: |
| Groq       | :white\_check\_mark: | :white\_check\_mark: |                      | :white\_check\_mark: |                      |
| Perplexity | :white\_check\_mark: | :white\_check\_mark: |                      |                      |                      |

If there are more providers or features you would like to see implemented in LLM.js please let us know by opening an issue!

## Contributing

PRs are accepted!

To get started clone the repo:

```
git clone https://github.com/sphinx-labs/llm.git
```

Then open the project and install the dependencies:

```
cd llm && pnpm install
```

Test your changes:

```
pnpm test
```

## License

LLM.js is free and open source under the GPLv3 license.