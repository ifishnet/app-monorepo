import type { NostrEvent } from '@onekeyhq/engine/src/vaults/utils/nostr/types';
import type { IDappSourceInfo } from '@onekeyhq/shared/types';

import { NostrModalRoutes } from '../../routes/routesEnum';

export { NostrModalRoutes };

export type NostrRoutesParams = {
  [NostrModalRoutes.GetPublicKey]: {
    sourceInfo: IDappSourceInfo;
  };
  [NostrModalRoutes.SignEvent]: {
    sourceInfo: IDappSourceInfo;
    event?: NostrEvent;
    pubkey?: string;
    plaintext?: string;
    ciphertext?: string;
    sigHash?: string;
  };
  [NostrModalRoutes.NostrAuthentication]: {
    onDone: (password: string) => void;
    walletId: string;
  };
  [NostrModalRoutes.ExportPubkey]: {
    walletId: string;
  };
};
