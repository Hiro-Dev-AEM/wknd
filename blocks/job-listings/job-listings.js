export default async function decorate(block) {
    // JSONデータを取得するURL
    const url = 'https://main--wknd--hiro-dev-aem.hlx.page/test.json';
    
    try {
      // データをフェッチしてJSONに変換
      const response = await fetch(url);
      const jsonData = await response.json();
      const jobData = jsonData.data;
  
      // テーブルの作成
      const table = document.createElement('table');
      table.className = 'job-listings-table';
  
      // テーブルのヘッダー行
      const headers = ['ID', '業界', '職種', '会社名', '雇用形態', '勤務地', '仕事内容', '求められる経験', '最低年収', '年収', '言語能力'];
      const headerRow = document.createElement('tr');
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);
  
      // テーブルのデータ行
      jobData.forEach(job => {
        const row = document.createElement('tr');
  
        const fields = [
          job.id,
          job.industry,
          job.experiencedOccupation,
          job.companyName,
          job.employmentType,
          job.workPlace,
          job.jobDescription,
          job.experienceSought,
          job.minAnnualIncome,
          job.annualIncome,
          job.languageAbility,
        ];
  
        fields.forEach(field => {
          const td = document.createElement('td');
          td.textContent = field;
          row.appendChild(td);
        });
  
        table.appendChild(row);
      });
  
      // 既存の求人リストのブロックにテーブルを挿入
      block.innerHTML = '';
      block.appendChild(table);
      
    } catch (error) {
      console.error('Error fetching job listings:', error);
    }
  }
  