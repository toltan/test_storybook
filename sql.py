def create_sql():
    sql_list = []
    for i in range(70):
        sql_list.append(
          f"'{i + 1}e00', 'テスト', '太郎${i + 1}', 1, 1, '20210101', 1, '20210101', 1, '20210101', 1, '20210101', 1`"
        )
    jls_extract_var = '\n'
    sql = f"""
    INSERT INTO [dbo][003_学生管理] (
      [学籍番号],
      [氏名（姓）],
      [氏名（名）],
      [GWSアカウント作成対象区分],
      [GWSアカウント更新対象区分],
      [停止グループ1メール送付日],
      [停止グループ1メール送付状態区分],
      [停止グループ2メール送付日],
      [停止グループ2メール送付状態区分],
      [GWSアカウント停止予定日],
      [GWSアカウント停止対象区分],
      [GWSアカウント削除予定日],
      [GWSアカウント削除対象区分]
    )
    VALUES (
      {jls_extract_var.join(sql_list)}
    )"""
    print(sql)

create_sql()

