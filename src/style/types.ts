import { ProcessOptions, LazyResult, Result } from 'postcss';
import { RawSourceMap } from '../sourcemap';

export interface StyleCompileOptions {
  source: string;
  filename: string;
  id?: string;
  map?: any;
  scoped?: boolean;
  preprocessLang?: string;
  preprocessOptions?: any;
  postcssOptions?: ProcessOptions;
  postcssPlugins?: any[];
}

export interface AsyncStyleCompileOptions extends StyleCompileOptions {
  isAsync?: boolean;
}

export interface StyleCompileResults {
  code: string;
  map: any | void;
  source: string;
  rawResult: LazyResult | Result | void;
  errors: string[];
}

export interface StylePreprocessor {
  render(
    source: string,
    map: any | null,
    options: any
  ): StylePreprocessorResults;
}

export interface StylePreprocessorResults {
  code: string;
  map?: RawSourceMap | any;
  errors: Array<Error>;
}
