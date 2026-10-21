type GoatCounter = { count: (vars: { path: string; title?: string; event?: boolean }) => void };

/** Registra um evento no GoatCounter. Não faz nada se o script não carregou (ex.: bloqueador de anúncios). */
export function track(path: string, title: string) {
  const gc = (window as unknown as { goatcounter?: GoatCounter }).goatcounter;
  gc?.count?.({ path, title, event: true });
}
