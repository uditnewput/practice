import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  categories=[
    {"id":"html", "name": "HTML"},
    {"id":"css", "name": "CSS"},
    {"id":"jquery", "name": "jQuery"},
    {"id":"angular", "name": "Angular"},
    {"id":"node", "name": "Node"},
    {"id":"mongodb", "name": "MongoDB"},
    {"id":"bootstrap", "name": "Bootstrap"},
    {"id":"react", "name": "React"},
    {"id":"ruby", "name": "Ruby"},
    {"id":"javascript", "name": "Javascript"},
    {"id":"devops", "name": "DevOps"},
    {"id":"python", "name": "Python"},
    {"id":"blockchain", "name": "Blockchain"},
    {"id":"iot", "name": "IoT"},
    {"id":"aws", "name": "AWS"},
    {"id":"robotics", "name": "Robotics"},
    {"id":"python", "name": "Python"},
    {"id":"java", "name": "Java"},
  ];

  @Input('parentData') public selectedId:string=""; //for active class in category list
  // public selectedId:string='';
  @Output() public childEvent = new EventEmitter();
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId="html";
  }
  onSelect(c:{id:string,name:string}){
    this.childEvent.emit(c.id);
    this.router.navigate(['/books',c.id]);
  }
  isActive(c:{id:string,name:string}){
    // console.log("c.id="+c.id+"this.selectedId"+this.selectedId);
    return c.id==this.selectedId;
  }
}
