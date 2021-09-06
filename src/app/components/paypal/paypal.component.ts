import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

    constructor(
        private auth: AuthService,
        private snackBar: MatSnackBar,
        private router: Router
    ){ }

    public payPalConfig?: IPayPalConfig;

    ngOnInit(): void {
        this.initConfig();
    }

    precios = ['80.00', '100.00', '40.00', '50.00', '50.00'];
    preciosInscripcionTardia = ['100.00', '120.00', '60.00', '70.00', '70.00'];
    categoria = ['Investigador socio ALAR', 'Investigador no socio', 'Estudiante socio ALAR', 'Estudiante no socio', 'Productores' ];
    precioActual = this.auth.user.postulaTrabajo? this.precios[parseInt(this.auth.user.categoria)] : this.preciosInscripcionTardia[parseInt(this.auth.user.categoria)];
    categoriaActual = this.categoria[parseInt(this.auth.user.categoria)];

    private initConfig(): void {
        this.payPalConfig = {
            currency: 'USD',
            clientId: 'AYOKxjm_cS5ePQKWD5HOjOVs7sVxuz2-XXc82-_lAR6vpe0axjcUKAWUE9fZmKVrII7G4Zl4w2CpkUeg',
            createOrderOnClient: (data) => <ICreateOrderRequest>{
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: 'USD',
                        value: this.precioActual,
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: this.precioActual
                            }
                        }
                    },
                    items: [{
                        name: 'Inscripción Congreso XXX RELAR V PGPR - Categoría: ' + this.categoriaActual,
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                        unit_amount: {
                            currency_code: 'USD',
                            value: this.precioActual,
                        },
                    }]
                }],
                application_context:{
                    shipping_preference: 'NO_SHIPPING'
                }
            },
            advanced: {
                commit: 'true',
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: (data, actions) => {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                this.snackBar.open('Pago aprobado. Esperando autorización', 'Aceptar', { duration: 3000 });
            },
            onClientAuthorization: (data) => {
                this.auth.actualizarInscripcion().subscribe( 
                    (resp) => this.router.navigateByUrl('registrarse-5'),
                    (error) => this.snackBar.open('Se ha producido un error al guardar el pago', 'Aceptar', { duration: 3000 }));
                console.log('onClientAuthorization', data);
            },
            onCancel: (data, actions) => {
                this.snackBar.open('Pago cancelado', 'Aceptar', { duration: 3000 });
                console.log('OnCancel', data, actions);

            },
            onError: err => {
                console.log('OnError', err);
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
            },
        };
    }
}