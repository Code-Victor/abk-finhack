import { atom } from "nanostores";
import type { Expert } from "@/data";

interface ActiveExpert extends Expert {}

export const activeExpertStore = atom<ActiveExpert | null>(null);
export const smoothScrollStore = atom(true);
