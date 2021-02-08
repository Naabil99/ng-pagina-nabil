import { formatDate } from '@angular/common';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class entrenadorData implements InMemoryDbService {

  createDb() {
    let entrenadors = [
      {
        "id": 1,
        "imagen": "https://www.precor.com/es-xl/blog/wp-content/uploads/sites/6/2017/02/Precor_In-Club_DPL-DSL-Coach_C1_1311-600x400.jpg",
        "nombre": "Juan Perez",
        "detalles": "Entrenador personal, centrado en calistenia",
        "experiencia": 10,
      },
      {
        "id": 2,
        "imagen": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-trainer-2-1533576998.png",
        "nombre": "Alberto gutierrez",
        "detalles": "Entrenador personal y powerlifter profesional",
        "experiencia": 15,
      },
      {
        "id": 3,
        "imagen": "https://images.squarespace-cdn.com/content/v1/5c02a641f2e6b168a4b51cd3/1553083349768-XLHF1P78THIBUT65YJPL/ke17ZwdGBToddI8pDm48kEylb_c54PRdZBMiZa8dy34UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2ErMd409aVXnc_vFLcchNJuGXcDM87L3ccEiW5TV_4Icxb27qhdBlCJwccbVYQTp-/3296.jpg",
        "nombre": "Eduardo hall",
        "detalles": "Strongman, ha batido numerosos récords mundiales y entrenador personal",
        "experiencia": 30,
      },

    ];
    return { entrenadors: entrenadors };
  }
}
