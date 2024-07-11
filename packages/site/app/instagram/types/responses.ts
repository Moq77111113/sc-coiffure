type ShortToken = {
  access_token: string
  user_id: number
  permissions: string[]
}

type LongToken = {
  access_token: string
  token_type: string
  expires_in: number
}

type RefreshToken = {
  access_token: string
  token_type: string
  expires_in: number
  permissions: string[]
}

export type Token = {
  Short: ShortToken
  Long: LongToken
  Refresh: RefreshToken
}

type Paging = {
  cursors: {
    before: string
    after: string
  }
  next?: string
  before?: string
}

export type FieldSet =
  | 'id'
  | 'caption'
  | 'media_type'
  | 'media_url'
  | 'thumbnail_url'
  | 'timestamp'
  | 'username'
  | 'permalink'

export type Media<Fields extends FieldSet[] = FieldSet[]> = {
  data: Record<Fields[number], string>[]
  paging: Paging
}
