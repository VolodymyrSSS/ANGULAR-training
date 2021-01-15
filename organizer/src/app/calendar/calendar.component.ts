import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DateService } from '../shared/date.service';

interface Day {
  value: moment.Moment,
  active: boolean,
  disabled: boolean,
  selected: boolean
}

interface Week {
  days: Day[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: Week[];

  constructor(public dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this));
  }

  //визначаємо кордони для відображення календаря
  generate(now: moment.Moment) { // в now - зберігається значення місяця з комп-та selector
    // щоб перший день починався з першого дня місяця (moment переключився на старт місяця)
    // застосуємо також now.clone() - щоб не було мутацій
    const startDay = now.clone().startOf('month').startOf('week');
    // щоб останній день закінчувався останнім днем місяця (moment - на кінець місяця)
    const endDay = now.clone().endOf('month').endOf('week');

    // для проходження по циклу всього місяця
    const date = startDay.clone().subtract(1, 'day');
    const calendar = [];
    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date');
            const disabled = !now.isSame(value, 'month');
            const selected = now.isSame(value, 'date');

            return {
              value, active, disabled, selected
            }
          })
      })
    }
    this.calendar = calendar;
  } 

  select(day: moment.Moment) {
    this.dateService.changeDate(day)
  }
}
