@Component({
  selector: 'async-key-value',
  templateUrl: 'async-key-value.component.html',
})
export class AsyncKeyValueComponent {
  hounds: Observable<any> = this.getHoundList();

  obj = {
    c: 123,
    b: 456,
    a: 789,
  };

  mapObj = new Map([
    ['c', 123],
    ['b', 446],
    ['a', 789],
  ]);

  constructor(private http: HttpClient) {}

  obsValue = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      console.log('EMITTED!');
      observer.next('90000');
    }, 3000);
  });
  // .pipe(shareReplay());

  getHoundList(): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breed/hound/list');
  }

  orderOriginal = (
      a: KeyValue<string, number>,
      b: KeyValue<string, number>
  ): number => {
    return 0;
  };

  orderbyValueAsc = (
      a: KeyValue<string, number>,
      b: KeyValue<string, number>
  ): number => {
    return a.value > b.value ? -1 : a.value > b.value ? 0 : 1;
  };

  orderbyValueDsc = (
      a: KeyValue<string, number>,
      b: KeyValue<string, number>
  ): number => {
    return a.value > b.value ? 1 : a.value > b.value ? 0 : -1;
  };
}