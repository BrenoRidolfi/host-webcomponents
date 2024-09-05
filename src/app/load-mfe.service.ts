import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class LoadMfeService {
    loadScript(src: string) {
        if (document.querySelector(`script[src="${src}"]`)) {
            console.log(`${src} script já carregado`);
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => {
            console.log(`${src} script loaded`);
        };
        script.onerror = (error) => {
            console.error(`Failed to load ${src}`, error);
        };
        document.body.appendChild(script);
    }
}