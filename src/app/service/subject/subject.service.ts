import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../utility/storage";
import {SubjectResponse} from "./subject.response";
import {CreateSubjectRequest} from "./create-subject.request";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url: string = apiUrl + '/subjects';

  constructor(private http: HttpClient) {
  }

  getSubjects(): Promise<SubjectResponse[] | null> {
    return new Promise<SubjectResponse[] | null>(resolve => {
      this.http.get<SubjectResponse[]>(this.url).subscribe({
        next: (response: SubjectResponse[]) => {
          resolve(response);
        },
        error: (err) => {
          resolve(null);
        }
      });
    });
  }

  createSubject(request: CreateSubjectRequest): Promise<SubjectResponse | null> {
    return new Promise<SubjectResponse | null>(resolve => {
      this.http.post<SubjectResponse>(this.url, request).subscribe({
        next: (response: SubjectResponse) => {
          resolve(response);
        },
        error: () => {
          resolve(null);
        }
      });
    });
  }
}
