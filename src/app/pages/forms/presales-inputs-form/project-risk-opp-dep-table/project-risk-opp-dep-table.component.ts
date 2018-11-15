import {Component, OnDestroy, OnInit} from '@angular/core';
import {PresalesFormService} from '../../../../services/presales-form.service';
import {NotificationService} from '../../../../services/notification.service';
declare var $: any;

interface RiskOppDepEntryInterface {
    id: number;
    description: string;
    type: string;
    probability: string;
    severity: string;
    impact: string;
}

@Component({
    selector: 'app-project-risk-opp-dep-table',
    templateUrl: './project-risk-opp-dep-table.component.html',
    styleUrls: ['./project-risk-opp-dep-table.component.css']
})
export class ProjectRiskOppDepTableComponent implements OnInit, OnDestroy {
    riskEntries: RiskOppDepEntryInterface[] = [];
    riskEntry = <RiskOppDepEntryInterface>{};
    typeSelectOption = ['Risk', 'Opportunity', 'Dependency', 'Issue'];
    probabilitySelectOptions = ['Low', 'Medium', 'High', 'Critical'];
    severitySelectOptions = ['Low', 'Medium', 'High', 'Critical'];
    riskHtmlDialogLabel = 'Add new entry';
    riskIndexToEditTo = 0;
    constructor(private presalesService: PresalesFormService, private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.presalesService.getAllRiskOpp().subscribe((data: any) => {
            data.data.allRiskOpportunityByProject.forEach(value => this.riskEntries.push(value));
        });
    }

  dosmthn() {
  }
  openAddDialogRisk() {
    this.riskHtmlDialogLabel = 'Add new entry';
    this.riskEntry = {
      id: -1,
      description: '',
      type: 'Choose',
      probability: 'Choose',
      severity: 'Choose',
      impact: ''
    };
  }
  openEditDialogRisk(i) {
    this.riskHtmlDialogLabel = 'Edit entry';
    this.riskIndexToEditTo = i;
    this.riskEntry = {
      id: this.riskEntries[i].id,
      description: this.riskEntries[i].description,
      type: this.riskEntries[i].type,
      probability: this.riskEntries[i].probability,
      severity: this.riskEntries[i].severity,
      impact: this.riskEntries[i].impact
    };
  }
  openDeleteDialogRisk(i) {
    this.riskIndexToEditTo = i;
    this.riskEntry = {
      id: this.riskEntries[i].id,
      description: this.riskEntries[i].description,
      type: this.riskEntries[i].type,
      probability: this.riskEntries[i].probability,
      severity: this.riskEntries[i].severity,
      impact: this.riskEntries[i].impact
    };
  }
  deleteTableRowRisk() {
      const notificationData = this.getNotificationData();
      this.presalesService.deleteRiskOpp(this.riskEntries[this.riskIndexToEditTo].id).subscribe(
      (resp: any) => {
        this.riskEntries.splice(this.riskIndexToEditTo, 1);
        this.triggerToast('Risk Opportunity Dependency', 'Entry deleted successfully.', 'warning');
          const notificationTitle = 'Le ' + this.riskEntry.type + ' a supprimé';
          const notificationMessage = notificationData.projectName + ': ' + this.riskEntry.type + ' Description: ' + this.riskEntry.description + ' a été supprimé';
          this.notificationService.addNotification({
              title: notificationTitle,
              message: notificationMessage,
              projectId: this.presalesService.projectId,
              recipients: notificationData.recipients,
              groups: ['PMO'],
          });
      },
      () => this.triggerToast('Risk Opportunity Dependency', 'An error occurred deleting entry.', 'error')
    );
  }
  saveRisk() {
      const notificationData = this.getNotificationData();
      if (this.riskHtmlDialogLabel === 'Add new entry') {
      this.presalesService.addRiskOpp(this.riskEntry).subscribe(
        (resp: any) => {
          this.riskEntry.id = resp.data.addRiskOpportunity.id;
          this.riskEntries.push(this.riskEntry);
            const notificationTitle = 'Un nouveau ' + this.riskEntry.type + ' ' + notificationData.projectName;
            const notificationMessage = notificationData.projectName + ': ' + this.riskEntry.type + ' Description: ' + this.riskEntry.description + ' a été ajouté';
            this.notificationService.addNotification({
                title: notificationTitle,
                message: notificationMessage,
                projectId: this.presalesService.projectId,
                recipients: notificationData.recipients,
                groups: ['PMO'],
            });
          this.triggerToast('Risk Opportunity Dependency', 'Entry added successfully.', 'success');
        },
        () => this.triggerToast('Risk Opportunity Dependency', 'An error occurred adding entry.', 'error')
      );
    } else {
      this.presalesService.editRiskOpp(this.riskEntry).subscribe(
        () => {
          this.riskEntries[this.riskIndexToEditTo] = this.riskEntry;
            const notificationTitle = 'Le ' + this.riskEntry.type + ' a été mis à jour';
            const notificationMessage = notificationData.projectName + ': ' + this.riskEntry.type + ' Description: ' + this.riskEntry.description + ' a été mis à jour';
            this.notificationService.addNotification({
                title: notificationTitle,
                message: notificationMessage,
                projectId: this.presalesService.projectId,
                recipients: notificationData.recipients,
                groups: ['PMO'],
            });
          this.triggerToast('Risk Opportunity Dependency', 'Entry edited successfully.', 'success');
        },
        () => this.triggerToast('Risk Opportunity Dependency', 'An error occurred editing entry.', 'error')
      );
    }
  }
  selectTagsAreFilled() {
    return this.riskEntry.impact !== 'Choose' && this.riskEntry.severity !== 'Choose' && this.riskEntry.type !== 'Choose';
  }

  getNotificationData() {
      const projectName = [];
      const recipients = [];

      this.presalesService.getProjectNameAndManagers().subscribe((response: any) => {
          projectName.push(response.data.project.projectName);
          if (response.data.project.AccountManager !== null) {
              recipients.push(response.data.project.AccountManager);
          }
          if (response.data.project.projectManager !== null) {
              recipients.push(response.data.project.projectManager);
          }
      });

      return {projectName: projectName, recipients: recipients};

  }

  triggerToast(heading: string, text: string, icon: string) {
    $.toast({
      heading: heading,
      text: text,
      position: 'top-right',
      loaderBg: '#ff6849',
      icon: icon,
      hideAfter: 5000,
      stack: 6,
      loader: false
    });
  }
  ngOnDestroy() {

  }
}

