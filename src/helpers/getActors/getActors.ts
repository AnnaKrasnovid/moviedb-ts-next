import { ActorSimpleItemInt } from "@/settings/interfaces";

export function getActors(list: Array<ActorSimpleItemInt>) {
    if (list) {
        let actors: Array<string> = [];
        list.map((i: ActorSimpleItemInt) => i.profession === 'актеры' ? actors.push(i.name) : '');
        return actors.join(", ");
    }
}