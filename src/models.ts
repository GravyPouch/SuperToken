export const models = {
  openai: {
    models: [
      'gpt-4o',
      'gpt-4o-2024-05-13',
      'gpt-4-turbo',
      'gpt-4-turbo-2024-04-09',
      'gpt-4-0125-preview',
      'gpt-4-turbo-preview',
      'gpt-4-1106-preview',
      'gpt-4-vision-preview',
      'gpt-4',
      'gpt-4-0314',
      'gpt-4-0613',
      'gpt-4-32k',
      'gpt-4-32k-0314',
      'gpt-4-32k-0613',
      'gpt-3.5-turbo',
      'gpt-3.5-turbo-16k',
      'gpt-3.5-turbo-0301',
      'gpt-3.5-turbo-0613',
      'gpt-3.5-turbo-1106',
      'gpt-3.5-turbo-0125',
      'gpt-3.5-turbo-16k-0613',
    ] as const,
    supportsJSON: [
      'gpt-4o',
      'gpt-4o-2024-05-13',
      'gpt-4-turbo',
      'gpt-4-turbo-2024-04-09',
      'gpt-4-0125-preview',
      'gpt-4-turbo-preview',
      'gpt-4-1106-preview',
      'gpt-4-vision-preview',
      'gpt-3.5-turbo',
      'gpt-3.5-turbo-1106',
      'gpt-3.5-turbo-0125',
    ] as const,
  },
  ai21: {
    models: ['jamba-instruct'] as const,
    supportsJSON: [] as const,
  },
  anthropic: {
    models: [
      'claude-3-5-sonnet-20240620',
      'claude-3-opus-20240229',
      'claude-3-sonnet-20240229',
      'claude-3-haiku-20240307',
      'claude-2.1',
      'claude-2.0',
      'claude-instant-1.2',
    ] as const,
    supportsJSON: [] as const,
  },
  gemini: {
    models: ['gemini-1.5-pro', 'gemini-1.5-flash', 'gemini-1.0-pro'] as const,
    supportsJSON: ['gemini-1.5-pro', 'gemini-1.5-flash'] as const,
  },
  cohere: {
    models: [
      'command-r-plus',
      'command-r',
      'command',
      'command-nightly',
      'command-light',
      'command-light-nightly',
    ] as const,
    supportsJSON: [] as const,
  },
  bedrock: {
    models: [
      'amazon.titan-text-lite-v1',
      'amazon.titan-text-express-v1',
      'anthropic.claude-3-opus-20240229-v1:0',
      'anthropic.claude-3-sonnet-20240229-v1:0',
      'anthropic.claude-3-haiku-20240307-v1:0',
      'anthropic.claude-v2:1',
      'anthropic.claude-v2',
      'anthropic.claude-instant-v1',
      'cohere.command-r-plus-v1:0',
      'cohere.command-r-v1:0',
      'cohere.command-text-v14',
      'cohere.command-light-text-v14',
      'meta.llama3-8b-instruct-v1:0',
      'meta.llama3-70b-instruct-v1:0',
      'meta.llama2-13b-chat-v1',
      'meta.llama2-70b-chat-v1',
      'mistral.mistral-7b-instruct-v0:2',
      'mistral.mixtral-8x7b-instruct-v0:1',
      'mistral.mistral-large-2402-v1:0',
    ] as const,
    // At the time of writing, the only models that Bedrock supports which allow JSON are Mistral
    // models. However, Bedrock's `additionalModelRequestFields` field, which is designed to allow
    // us to pass arbitrary parameters to the model, does not appear to work for Mistral's
    // `responseFormat` field.
    supportsJSON: [],
  },
  mistral: {
    models: [
      'open-mistral-7b',
      'mistral-tiny-2312',
      'open-mixtral-8x7b',
      'mistral-small-2312',
      'open-mixtral-8x22b',
      'open-mixtral-8x22b-2404',
      'mistral-small-latest',
      'mistral-small-2402',
      'mistral-medium-latest',
      'mistral-medium-2312',
      'mistral-large-latest',
      'mistral-large-2402',
      'codestral-latest',
      'codestral-2405',
    ] as const,
    // Mistral claims that all of its models support JSON, but several of their weaker models either
    // fail to produce valid JSON or produce very low quality results for the following prompt:
    // "Generate a JSON that maps ten athletes to their jersey numbers". We removed these models
    // from the list to ensure that we only support models that reliably produce decent results.
    supportsJSON: [
      'open-mistral-7b',
      'mistral-tiny-2312',
      'open-mixtral-8x22b',
      'open-mixtral-8x22b-2404',
      'mistral-large-latest',
      'mistral-large-2402',
      'codestral-latest',
      'codestral-2405',
    ] as const,
  },
  groq: {
    models: [
      'llama3-8b-8192',
      'llama3-70b-8192',
      'mixtral-8x7b-32768',
      'gemma-7b-it',
      'gemma2-9b-it',
    ] as const,
    // Groq claims that all of its models support JSON, but some of the weaker models either fail to
    // produce valid JSON or produce very low quality results for the following prompt: "Generate a
    // JSON that maps ten athletes to their jersey numbers". We removed these models from the list
    // to ensure that we only support models that reliably produce decent results.
    supportsJSON: ['llama3-70b-8192', 'gemma-7b-it', 'gemma2-9b-it'] as const,
  },
  perplexity: {
    models: [
      'llama-3-sonar-small-32k-chat',
      'llama-3-sonar-small-32k-online',
      'llama-3-sonar-large-32k-chat',
      'llama-3-sonar-large-32k-online',
      'llama-3-8b-instruct',
      'llama-3-70b-instruct',
      'mixtral-8x7b-instruct',
    ] as const,
    supportsJSON: [] as const,
  },
}