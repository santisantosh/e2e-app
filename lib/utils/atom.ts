import * as Promise from "bluebird";
import {ChildProcess} from "child_process";
import * as std from "./std";
import {spawn} from "./spawn";

export function open(path: string): Promise<any> {

    return new Promise((resolve: Function, reject: Function): void => {

        std.log('[EDIT] open atom');

        let childProcess: ChildProcess = spawn('atom', [path], path);

        childProcess.on('error', resolve);

        resolve();

    })
        .catch(() => {
            std.log('[EDIT] Atom isn\'t installed on your computer. Get Atom on atom.io to edit your project.');
        });
}