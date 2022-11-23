import { PATH_KEY, METHOD_KEY, MIDDLEWARE_KEY } from "@/constant/decorator";
import router from "@/router/router";
import { RequestMethod } from "@/decorator/request";
import { Middleware } from "@/decorator/use";


export const controller = (prefix: string): ClassDecorator => {
    return (target) => {

        const unifyMiddleware: Middleware[] = Reflect.getMetadata(MIDDLEWARE_KEY, target) || [];

        Object
            .getOwnPropertyNames(target.prototype)
            .filter(n => n != "constructor")
            .forEach(name => {
                const path = Reflect.getMetadata(PATH_KEY, target.prototype, name);
                const method: RequestMethod = Reflect.getMetadata(METHOD_KEY, target.prototype, name);

                const middlewareList: Middleware[] = Reflect.getMetadata(MIDDLEWARE_KEY, target.prototype, name) || [];

                const combineMiddlewareList = [
                    ...unifyMiddleware,
                    ...middlewareList
                ];

                if (path && method) {
                    const handler = target.prototype[name];
                    const fullPath = prefix + path;
                    router[method](fullPath, ...combineMiddlewareList, handler);
                }
            });
    };
}