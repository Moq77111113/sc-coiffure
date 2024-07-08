type ShortToken = {
  access_token: string;
  user_id: number;
  permissions: string[];
};

type LongToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type RefreshToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
  permissions: string[];
};

export type Token = {
  Short: ShortToken;
  Long: LongToken;
  Refresh: RefreshToken;
};
