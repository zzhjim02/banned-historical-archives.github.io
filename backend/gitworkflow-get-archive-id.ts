import { exec, execSync } from 'node:child_process';
import { join, basename, dirname, extname } from 'node:path/posix';
import { isAbsolute } from 'node:path';
import https from 'https';
import { Transform } from 'stream';
import fs from 'node:fs';
import { ParserOptionV2 } from '../types';
import JSON5 from 'json5';

const body = (process.env as any).BODY.trim();
const raw_title = (process.env as any).TITLE.trim();

export async function start() {
  try {
    const body1: string = body.substring(0, body.lastIndexOf('```'));
    const body2: string = body1.substring(body1.lastIndexOf('```') + 3);
    const config = JSON5.parse(body2) as ParserOptionV2 & {
      id: string;
      source_name: string;
    };
    config.archive_id =
      config.archive_id == undefined ? 1 : config.archive_id;
    if (config.archive_id >= 0) {
      console.log(config.archive_id);
    } else {
      console.log('bad archive id');
      process.exit(3);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

if (!(process.env as any).TEST) {
  start();
}
