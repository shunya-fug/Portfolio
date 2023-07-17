/** ポートフォリオ表示項目 */
export type Portfolio = {
  /** 成果物一覧 */
  gallery: Gallery[];
  /** 技術一覧 */
  skill: Skill[];
  /** プロフィール */
  profile: string;
  /** 使用技術一覧 */
  tech: Tech[];
};

/** 成果物 */
export type Gallery = {
  title: string;
  description?: string;
  image?: Image;
  url?: string;
};

/** 技術一覧（区分） */
export type Skill = {
  category: string;
  tech: Tech[];
};

/** 技術 */
export type Tech = {
  id: string;
  name: string;
  rating: number;
  icon: TechIcon;
  url?: string;
};

/** 技術アイコン */
export type TechIcon = {
  url: string;
  height: number;
  width: number;
};

/** 画像 */
export type Image = {
  url: string;
  height: number;
  width: number;
};
