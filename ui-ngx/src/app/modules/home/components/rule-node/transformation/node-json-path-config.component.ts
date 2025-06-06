///
/// Copyright © 2016-2024 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';

@Component({
  selector: 'tb-transformation-node-json-path-config',
  templateUrl: './node-json-path-config.component.html',
  styleUrls: []
})

export class NodeJsonPathConfigComponent extends RuleNodeConfigurationComponent {

  jsonPathConfigForm: FormGroup;

  constructor(private fb: FormBuilder) {
    super();
  }

  protected configForm(): FormGroup {
    return this.jsonPathConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.jsonPathConfigForm = this.fb.group({
      jsonPath: [configuration ? configuration.jsonPath : null, [Validators.required]],
    });
  }
}
