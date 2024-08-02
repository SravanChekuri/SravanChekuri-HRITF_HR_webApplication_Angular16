import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        // alert(2)
        // add modal to array of active modals
        this.modals.push(modal);
        console.log("this.modals",this.modals)
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        // alert(1)
        // open modal specified by id
        // console.log("modalid :",id)
        const modal = this.modals.find(x => x.id === id);
        console.log("modal",modal)
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}