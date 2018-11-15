import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-invoice').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();

    let html = '<html>';
    html += '<head>';
    html += '<title>Print tab</title>';
    html += '<style>';
    html += 'body{ font-family: \'Open Sans\',sans-serif; }';
    html += '.white-box {background:#fff;padding:25px;margin-bottom:30px;border:1px solid#e5ebec;border-radius:4px;margin:30px;}';
    html += '.white-box > h3 {font-size: 21px;line-height: 30px;color: #222;}';
    html += '.clearfix {clear: both;}';
    html += '.pull-right.m-t-30.text-right p {color: #8d9498;font-size: 14px;}';
    html += '.pull-right.m-t-30.text-right h3 {font-weight: 400;}';
    html += '.text-right {text-align: right;}';
    html += '.text-right button {';
    html += 'display: inline-block;padding: 6px 12px;border-radius: 4px;font-size: 14px;font-weight: 400;transition: all 0.5s ease-in;';
    html += '}';
    html += '.text-right button:first-child {background-color: #e74a25;border: 2px solid #e74a25;color: #fff;}';
    html += '.text-right button:first-child:hover {opacity: 0.8;transition: all 0.5s ease-in;}';
    html += '.text-right button:last-child {background: transparent;border: 2px solid #e5ebec;color: #8d9498;margin-left: 10px;}';
    html += '.text-right button:last-child:hover {background: #e5ebec;transition: all 0.5s ease-in;}';
    html += 'hr {border-top: 1px solid #eee;margin-top: 20px;margin-bottom: 20px;}';
    html += '.white-box h3 span {float: right;font-weight: 400;}';
    html += '.address {font-style: normal;margin-bottom: 30px;}';
    html += '.white-box address .text-danger {color: #e74a25;}';
    html += '.white-box address p {color: #8d9498;line-height: 1.6;font-size: 14px;}';
    html += '.white-box .pull-left {float: left;}';
    html += '.white-box .pull-right {float: right;}';
    html += '.white-box .pull-right.text-right {text-align: right;}';
    html += '.white-box address > h3 {font-weight: 400;}';
    html += '.white-box address > h4 {font-size: 20px;margin-top: 0;margin-bottom: 0;color: #333b3f;}';
    html += '.table-responsive {overflow-x: auto;}';
    html += '.table {width: 100%;margin-bottom: 20px;}';
    html += '.table > tbody > tr > td, .table > tbody > tr > th,';
    html += '.table > tfoot > tr > td, .table > tfoot > tr > th,';
    html += '.table > thead > tr > td, .table > thead > tr > th {padding: 15px 8px;vertical-align: middle;text-align: center;}';
    html += '.table > tbody > tr > td {color: #8d9498;}';
    html += 'th {color: #333b3f;font-weight: 600;font-size: 14px;}';
    html += '.table > tbody > tr > td, .table > tbody > tr > th,';
    html += '.table > tfoot > tr > td, .table > tfoot > tr > th,';
    html += '.table > thead > tr > td, .table > thead > tr > th {border-top: 1px solid #e5ebec;}';
    html += '.table > caption + thead > tr:first-child > td, .table > caption + thead > tr:first-child > th,';
    html += '.table > colgroup + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > th,';
    html += '.table > thead:first-child > tr:first-child > td, .table > thead:first-child > tr:first-child > th {border-top: 0;}';
    html += '</style>';
    html += '</head>';
    html += '<body onload="window.print();window.close()">' + `${printContents}` + '</body>';
    html += '</html>';
    popupWin.document.write(html);
    popupWin.document.close();
  }

}
